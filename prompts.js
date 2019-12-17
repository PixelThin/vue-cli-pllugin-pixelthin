module.exports = [
    {
        type: 'input',
        name: 'locale',
        message: 'The locale of project localization.',
        validate: input => !!input,
        default: 'en'
    },
]
