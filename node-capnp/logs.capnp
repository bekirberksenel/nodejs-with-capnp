# priv/samples/logs.capnp
@0xd1430b0ef4a48814;
#$import "c++.capnp".namespace("logs");

struct Log  {  # 8 bytes, 8 ptrs  
  logtime @0   :UInt64;
  domainname @1 :Text;  
  querytype @2 :Int8;  
  clientipprotocol @3  :UInt8;
  clientip @4 :Text;  
  redirect @5 :Text;  
  serveripprotocol @6 :UInt8;
  serverip @7 :Text; 
  domainCategory @8 :List(Text);
  blockCategory @9:List(Text);
  publickey @10 :Text;  
  vpnuseridentifier @11 :Text;  
  localipprotocol @12 :UInt8;
  localip @13 :Text; 
   
}
struct Logs {  # 8 bytes, 1 ptrs
  logs @0 :List(Log);  
}
