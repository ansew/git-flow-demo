
const shortEmail =  (email) => {
    let avg, splitted, part1, part2;
    splitted = email.split("@");
    part1 = splitted[0];        
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
};
shortEmail("vesna.simeunovic@gmail.com")

let mail = "vesna.simeunovic@gmail.com"

console.log(mail.split("@")[1]);
console.log(mail.slice(0, 3)+"...@" + mail.split("@")[1]);