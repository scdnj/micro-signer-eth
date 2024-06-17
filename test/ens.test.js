import { deepStrictEqual } from 'node:assert';
import { describe, should } from 'micro-should';
import { bytesToHex } from '@noble/hashes/utils';
import { namehash } from '../lib/esm/net/ens.js';

describe('ENS', () => {
  should('namehash', () => {
    deepStrictEqual(
      bytesToHex(namehash('vitalik.eth')),
      'ee6c4522aab0003e8d14cd40a6af439055fd2577951148c14b6cea9a53475835'
    );
    deepStrictEqual(
      bytesToHex(namehash('benjaminion.eth')),
      'ce1ee36a55b52d39db63e16d1a097df75b04ede734494425de534e1b3f97d221'
    );
  });
});

// ESM is broken.
import url from 'node:url';
if (import.meta.url === url.pathToFileURL(process.argv[1]).href) {
  should.run();
}
