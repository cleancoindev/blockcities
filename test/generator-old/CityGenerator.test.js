// const _ = require('lodash');
//
// const CityGenerator = artifacts.require('CityGenerator');
//
// const {BN, constants, expectEvent, shouldFail} = require('openzeppelin-test-helpers');
//
// contract.skip('CityGenerator tests', (accounts) => {
//
//     before(async function () {
//         console.log(accounts);
//         this.generator = await CityGenerator.new({from: accounts[0]});
//     });
//
//     it.skip('generate me some randoms', async function () {
//         const results = {};
//         for (let i = 0; i < 100; i++) {
//
//             const {logs} = await this.generator.generate(randomAccount());
//
//             const {id, weight, random} = logs[0].args;
//             // console.log(`matched id=[${id}] weight=[${weight}] random=[${random}]`);
//
//             if (results[id]) {
//                 results[id]++;
//             } else {
//                 results[id] = 1;
//             }
//         }
//
//         console.log(results);
//
//         // console.log(await this.generator.getConfigSize());
//         // console.log(await this.generator.getConfig(0));
//
//         const totalConfigs = (await this.generator.getConfigSize()).toNumber();
//
//         for (let i = 0; i < totalConfigs; i++) {
//             const {value, weight} = await this.generator.getConfig(i);
//             console.log(`Config [${i}]`, value, weight);
//             // console.log(results[_.toString(value)]);
//         }
//     });
//
//
//     function randomAccount() {
//         // Random account between 0-9 (10 accounts)
//         return accounts[Math.floor(Math.random() * Math.floor(9))];
//     }
// });
