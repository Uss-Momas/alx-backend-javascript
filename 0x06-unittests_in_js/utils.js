class Utils {
    static calculateNumber(type, a, b) {
        const a_copy = Math.round(a);
        const b_copy = Math.round(b);

        if (type === 'SUM') {
            return a_copy + b_copy;
        }
        else if (type === 'SUBTRACT') {
            return a_copy - b_copy;
        }
        else if (type === 'DIVIDE') {
            if (b_copy === 0) {
                return 'Error';
            }
            return a_copy / b_copy;
        }
    }
}

module.exports = Utils;