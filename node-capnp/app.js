"use strict";
const capnp = require("capnp-ts");

const schSchema = require("./logs.capnp.js");

const logs = schSchema.Logs;

const log = schSchema.Log;

/*const Readable = require("stream").Readable;

var s = new Readable;

s.push('dosya.capnproto');

s.push(null);*/

//var schema = capnp.importSystem("capnp/sch.capnp");

var fs = require('fs');  // file system    


function writePackedMessageToStream(writeStream, message) {

  const arrayBuffer = message.toPackedArrayBuffer();

  // Beacause streams can't handle ArrayBuffers

  const buffer = new Buffer(arrayBuffer);

  writeStream.write(buffer);

}

function readToEndOfStream(readStream) { 

  return new Promise(function(resolve, reject) {

    let result = new Uint8Array();

    readStream.on('data', function(data) { //readStream.on hata

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

function bin2String(array) {

  var result = "";

  for (var i = 0; i < array.length; i++) {

    result += String.fromCharCode(parseInt(array[i], 2));

  }

  return result;

}
function printSchSchema(readStream) { //readStream  

 return readToEndOfStream(readStream).then(function(data) { //

   const message = new capnp.Message(data);

   const schSchema = message.getRoot(logs);

   schSchema.getLogs.forEach(function(Mssg) { //

    console.log('Logtime : ' + Mssg.getLogtime());

    console.log('Domainname : ' + Mssg.getDomainname());

    console.log('Querytype : ' + Mssg.getQuerytype());

    console.log('Clientipprotocol : ' + Mssg.getClientipprotocol()());

    console.log('Clientip : ' + Mssg.getClientip());

    console.log('Redirect : ' + Mssg.getRedirect());

    console.log('Serveripprotocol : ' + Mssg.getServeripprotocol());

    console.log('Serverip : ' + Mssg.getServerip());

    console.log('DomainCategory : ' + Mssg. getDomainCategory());

    console.log('BlockCategory : ' + Mssg.getBlockCategory());

    console.log('Publickey : ' + Mssg.getPublickey());

    console.log('Vpnuseridentifier : ' + Mssg.getVpnuseridentifier());

    console.log('Localipprotocol : ' + Mssg.getLocalipprotocol());

    console.log('Localip : ' + Mssg.getLocalip());

     
   });

  });

}







/*function printlogs(filePath) {

  if(!filePath){

    console.log("please give a file ");

    return;

  }

  var data = fs.readFileSync(filePath);

  var obj = capnp.parse(logsSchemas.Message, data);

  var outputBuffer = capnp.serialize(logsSchemas.Message, obj);

  console.log('outputBuffer : ',outputBuffer);

}*/






function main() {

    // TODO Not sure if we have dynamic schema usage available yet

    // StructSchema schema = Schema::from<logs>();

    var readStr = fs.createReadStream('log-ex3.capnproto');  //filePath to readStream conversion

    return printSchSchema(readStr);

  /*  if (process.argv.length != 4) {

      throw new Error('Missing arg.');

    } else if (process.argv[2] == 'read') {

      //return printSchSchema(process.argv[3] );

      return printSchSchema(readStr);

    }else {

      throw new Error('Invalid arg: ' + process.argv[1]);

    }*/

  }
  

  if (require && require.main === module) {

    Promise.resolve(main()).then(function(exitCode) {

      process.exit(exitCode);

    }).catch(function(error) {

      console.error(error);

      process.exit(1);

    });

  }

