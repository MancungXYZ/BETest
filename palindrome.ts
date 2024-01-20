function isPalindrome(str: string): boolean {
    // Menghapus spasi dan mengubah huruf menjadi huruf kecil
    const cleanedStr = str.toLowerCase().replace(/\s/g, '');

    // Memeriksa apakah string adalah palindrome
    for (let i = 0; i < Math.floor(cleanedStr.length / 2); i++) {
        if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

// Masukkan kalimat
const inputString = "Kasur ini rusak";
const result = isPalindrome(inputString);

if (result) {
    console.log(`"${inputString}" adalah palindrome.`);
} else {
    console.log(`"${inputString}" bukan palindrome.`);
}
