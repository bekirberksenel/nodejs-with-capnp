"use strict";

const capnp = require('capnp-js');


var fs = require('fs');


const logsSchemas = require('./sch.capnp.js');


// No destructuring assignment in node 4.0

const logs = logsSchemas.logs;

const Message = logsSchemas.Message;

function writePackedMessageToStream(writeStream, message) {

  const arrayBuffer = message.toPackedArrayBuffer();
 
 // Beacause streams can't handle ArrayBuffers
  const buffer = new Buffer(arrayBuffer);

  writeStream.write(buffer);

}


function readToEndOfStream(readStream) {

  return new Promise(function(resolve, reject) {

    let result = new Uint8Array();

    readStream.on('data', function(data) {

      const oldLen = result.byteLength;

      const newResult = new Uint8Array(oldLen + data.byteLength);

      newResult.set(result);

      newResult.set(data, oldLen);

      result = newResult;

    });

    readStream.on('end', function() {

      resolve(result);

    });

    readStream.on('error', reject);

  });

}


function printlogs(filePath) {

  if(!filePath){

    console.log("please give a file ");

    return;

  }

  var data = fs.readFileSync(filePath);

  var obj = capnp.parse(logsSchemas.Message, data);

  var outputBuffer = capnp.serialize(logsSchemas.Message, obj);

  console.log('outputBuffer : ',outputBuffer);
  


  /*
  return readToEndOfStream(readStream).then(function(data) {

    const message = new capnp.Message(data);

    const logs = message.getRoot(logs);

    logs.getMessage().forEach(function(Message) {

      console.log('Logtime : ' + Message.getLogtime());

      console.log('Domainname : ' + Message.getDomainname());

      console.log('Querytype : ' + Message.getQuerytype());

      console.log('Clientipprotocol : ' + Message.getClientipprotocol()());

      console.log('Clientip : ' + Message.getClientip());

      console.log('Redirect : ' + Message.getRedirect());

      console.log('Serveripprotocol : ' + Message.getServeripprotocol());

      console.log('Serverip : ' + Message.getServerip());

      console.log('DomainCategory : ' + Message. getDomainCategory());

      console.log('BlockCategory : ' + Message.getBlockCategory());

      console.log('Publickey : ' + Message.getPublickey());

      console.log('Vpnuseridentifier : ' + Message.getVpnuseridentifier());

      console.log('Localipprotocol : ' + Message.getLocalipprotocol());

      console.log('Localip : ' + Message.getLocalip());

    });

  });*/

}


function main() {

  // TODO Not sure if we have dynamic schema usage available yet

  // StructSchema schema = Schema::from<logs>();

  if (process.argv.length != 4) {

    throw new Error('Missing arg.');

  } else if (process.argv[2] == 'read') {

    return printlogs(process.argv[3] );

  }else {

    throw new Error('Invalid arg: ' + process.argv[1]);

  }

}


if (require && require.main === module) {

  Promise.resolve(main()).then(function(exitCode) {

    process.exit(exitCode);

  }).catch(function(error) {

    console.error(error);

    process.exit(1);

  });

}
