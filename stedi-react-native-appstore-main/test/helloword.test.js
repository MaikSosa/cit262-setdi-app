import saymyname from "../utils/helloworld.mjs";
import expect from "jest-extended";

it("W06 homework tests", ()=>{
    const name=saymyname();
    console.log(`Hello ${name}!`);

    expect(name).toBe("Mike");
})

