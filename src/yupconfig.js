import * as yup from 'yup'

yup.setLocale({
    mixed: {
        required: 'Champ requis',
        notType: function notType(_ref) {
            switch (_ref.type) {
                case 'number':
                    return 'Veuillez mettre un nombre'
                case 'string':
                    return 'Veuillez mettre une chaine de caractère'
                default:
                    return 'Veuillez mettre le bon type'
            }
        },
    },
    string: {
        email: 'Mettez un email valide',
    },
    number: {
        typeError: 'you must specify a number',
        required: 'un nombre est requis',
    },
})

export default yup
