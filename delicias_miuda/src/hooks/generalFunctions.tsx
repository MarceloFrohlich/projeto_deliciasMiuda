
import aesjs from 'aes-js';

const secretKeyString = process.env.NEXT_PUBLIC_AES_SECRET_KEY || 'mysecretkey12345678';
const secretKey = aesjs.utils.utf8.toBytes(secretKeyString.padEnd(16, '0'));

export function encryptData(data: any) {
    const textBytes = aesjs.utils.utf8.toBytes(JSON.stringify(data));
    const aesCtr = new aesjs.ModeOfOperation.ctr(secretKey, new aesjs.Counter(5));
    const encryptedBytes = aesCtr.encrypt(textBytes);
    return aesjs.utils.hex.fromBytes(encryptedBytes);
  };
  
  export function decryptData(encryptedHex: any) {
    if (!encryptedHex) {
      return {}
    }
    const encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);
    const aesCtr = new aesjs.ModeOfOperation.ctr(secretKey, new aesjs.Counter(5));
    const decryptedBytes = aesCtr.decrypt(encryptedBytes);
    return JSON.parse(aesjs.utils.utf8.fromBytes(decryptedBytes));
  }