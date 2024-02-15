import now_saymyname from "../utils/helloworld.mjs";
import assert from 'assert';

it("W06 homework tests", ()=>{
    const name=now_saymyname();
//    console.log(`Hello ${name}!`);
    assert.equal(name, "Mike");
});

