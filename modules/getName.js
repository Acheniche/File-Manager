export const getName = () => {
    const name = process.argv.find(
        (elem) => elem.substring(0, 11) === '--username='
    );
    if (name) {
        return name.substring(11).trim();
    } else {
        return 'Default username';
    }
};