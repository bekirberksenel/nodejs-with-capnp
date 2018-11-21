"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This file has been automatically generated by the [capnpc-ts utility](https://github.com/jdiaz5513/capnp-ts).
 */
const capnp = require("capnp-ts");
const capnp_ts_1 = require("capnp-ts");
exports._capnpFileId = "d1430b0ef4a48814";
class Mssg extends capnp_ts_1.Struct {
    getLogtime() { return capnp_ts_1.Struct.getUint64(0, this); }
    setLogtime(value) { capnp_ts_1.Struct.setUint64(0, value, this); }
    getDomainname() { return capnp_ts_1.Struct.getText(0, this); }
    setDomainname(value) { capnp_ts_1.Struct.setText(0, value, this); }
    getQuerytype() { return capnp_ts_1.Struct.getInt8(8, this); }
    setQuerytype(value) { capnp_ts_1.Struct.setInt8(8, value, this); }
    getClientipprotocol() { return capnp_ts_1.Struct.getUint8(9, this); }
    setClientipprotocol(value) { capnp_ts_1.Struct.setUint8(9, value, this); }
    getClientip() { return capnp_ts_1.Struct.getText(1, this); }
    setClientip(value) { capnp_ts_1.Struct.setText(1, value, this); }
    getRedirect() { return capnp_ts_1.Struct.getText(2, this); }
    setRedirect(value) { capnp_ts_1.Struct.setText(2, value, this); }
    getServeripprotocol() { return capnp_ts_1.Struct.getUint8(10, this); }
    setServeripprotocol(value) { capnp_ts_1.Struct.setUint8(10, value, this); }
    getServerip() { return capnp_ts_1.Struct.getText(3, this); }
    setServerip(value) { capnp_ts_1.Struct.setText(3, value, this); }
    adoptDomainCategory(value) { capnp_ts_1.Struct.adopt(value, capnp_ts_1.Struct.getPointer(4, this)); }
    disownDomainCategory() { return capnp_ts_1.Struct.disown(this.getDomainCategory()); }
    getDomainCategory() { return capnp_ts_1.Struct.getList(4, capnp.TextList, this); }
    hasDomainCategory() { return !capnp_ts_1.Struct.isNull(capnp_ts_1.Struct.getPointer(4, this)); }
    initDomainCategory(length) { return capnp_ts_1.Struct.initList(4, capnp.TextList, length, this); }
    setDomainCategory(value) { capnp_ts_1.Struct.copyFrom(value, capnp_ts_1.Struct.getPointer(4, this)); }
    adoptBlockCategory(value) { capnp_ts_1.Struct.adopt(value, capnp_ts_1.Struct.getPointer(5, this)); }
    disownBlockCategory() { return capnp_ts_1.Struct.disown(this.getBlockCategory()); }
    getBlockCategory() { return capnp_ts_1.Struct.getList(5, capnp.TextList, this); }
    hasBlockCategory() { return !capnp_ts_1.Struct.isNull(capnp_ts_1.Struct.getPointer(5, this)); }
    initBlockCategory(length) { return capnp_ts_1.Struct.initList(5, capnp.TextList, length, this); }
    setBlockCategory(value) { capnp_ts_1.Struct.copyFrom(value, capnp_ts_1.Struct.getPointer(5, this)); }
    getPublickey() { return capnp_ts_1.Struct.getText(6, this); }
    setPublickey(value) { capnp_ts_1.Struct.setText(6, value, this); }
    getVpnuseridentifier() { return capnp_ts_1.Struct.getText(7, this); }
    setVpnuseridentifier(value) { capnp_ts_1.Struct.setText(7, value, this); }
    getLocalipprotocol() { return capnp_ts_1.Struct.getUint8(11, this); }
    setLocalipprotocol(value) { capnp_ts_1.Struct.setUint8(11, value, this); }
    getLocalip() { return capnp_ts_1.Struct.getText(8, this); }
    setLocalip(value) { capnp_ts_1.Struct.setText(8, value, this); }
    toString() { return "Mssg_" + super.toString(); }
}
Mssg._capnp = { displayName: "Mssg", id: "ca6235848896668d", size: new capnp_ts_1.ObjectSize(16, 9) };
exports.Mssg = Mssg;
