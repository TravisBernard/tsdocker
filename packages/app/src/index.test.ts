import { greet } from "@travbern/app";

describe("greeting", () => {
    it("should return Hello World", () => {
        console.log = jest.fn();
        greet();
        expect(console.log).toHaveBeenCalledWith("Hello World");
    });
});
