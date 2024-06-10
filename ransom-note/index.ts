// function canConstruct(ransomNote: string, magazine: string): boolean {
//   var nodeLength = ransomNote.length;
//   while (ransomNote !== "" && nodeLength > 0) {
//     if (!magazine) {
//       break;
//     }
//     const character = ransomNote[nodeLength - 1];
//     if (magazine.includes(character)) {
//       ransomNote = ransomNote.replace(character, "");
//       magazine = magazine.replace(character, "");
//     }
//     nodeLength--;
//   }
//   return ransomNote.length ? false : true;
// }

// function canConstruct(ransomNote: string, magazine: string): boolean {
//   for (let index = 0; index < ransomNote.length; index++) {
//     const element = ransomNote.charAt(index);

//     const matchIndex = magazine.indexOf(element);

//     if (matchIndex === -1) {
//       return false;
//     }

//     magazine =
//       magazine.substring(0, matchIndex) + magazine.substring(matchIndex + 1);
//   }

//   return true;
// }

function canConstruct(ransomNote: string, magazine: string): boolean {
  const hash = new Map();

  for (let item of magazine) {
    hash.set(item, (hash.get(item) || 0) + 1);
  }

  for (let item of ransomNote) {
    if (hash.get(item) > 0) {
      hash.set(item, hash.get(item) - 1);
    } else {
      return false;
    }
  }

  return true;
}

const result = canConstruct("aa", "aab");
console.log("🚀 ~ result:", result);

// const string = "1234";
// console.log("🚀 ~ string:", string[1]);
