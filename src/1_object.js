//
test("Object1", () => {
    const red = "red";
    const green = "green";
    const blue = "blue"; 

    const object1 = {
        red: red,
        green: green,
        blue: blue
    };
    expect(object1.red).toBe(red);
    expect(object1.green).toBe(green);
    expect(object1.blue).toBe(blue);
}) 
