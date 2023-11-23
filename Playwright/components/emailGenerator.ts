export class EmailGenerator{
   email: string;

   generateEmail() {
       const suffix = new Date().getTime();
       this.email = `userExamples123+${suffix}@gmail.com`;

       return this.email;
   }
}