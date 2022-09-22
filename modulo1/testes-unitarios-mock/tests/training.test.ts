test("showing jest.fn",() => {
    const mock = jest.fn(()=>{
        const user = {
            nome:"AstroDev",
            idade: 29
        }
        return user
    })
})