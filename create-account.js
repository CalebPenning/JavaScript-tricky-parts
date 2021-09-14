function createAccount(pin, amount=0) {
    return {
        checkBalance(inputPin) {
            if (inputPin !== pin) return "Invalid PIN."
            return `$${amount}`
        },
        deposit(inputPin, newAmount) {
            
        }
    }
}

module.exports = { createAccount };
