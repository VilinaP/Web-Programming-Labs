import {describe, it, expect} from "vitest"
import {add} from "./main"

describe("main", function() {
    describe("add()", function(){
        it("adds two numbers together", function(){
            const result = add(1, 2)
            expect(result).toEqual(3)
        })
        it("concatenates strings", function(){
            const result = add("a", "b")
            expect(result).toEqual("ab")
        })
    })
})

