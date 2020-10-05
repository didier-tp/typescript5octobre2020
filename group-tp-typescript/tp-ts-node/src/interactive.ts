//NB:  process.stdin n'est reconnu ici par typescript 
//que si dépendance "@types/node": "^14.11.2" dans package.json
var stdin = process.stdin;
var stdout = process.stdout;

export class InteractiveComputer{
    x : number;
    y : number;
    z : number;

    constructor(){ 
        this.x=0; this.y=0; this.z=0;
    }

    static ask_(question : string) : Promise<string>{
        return new Promise ((resolve,reject)=> {
            stdin.resume();
            stdout.write(question + ": ");
            stdin.once('data', function(data : Buffer) {
                let dataAsString = data.toString().trim();
                if(dataAsString=="fin")
                    reject("end/reject");
                else
                resolve(dataAsString);
            });
        });
    }

    async ask_and_compute_x_plus_y() : Promise<number>{
        try {
            //.... à compléter en Tp
            let res=  0; //temporairement
            //.... à compléter en Tp
            return res;
        }catch(e) {
            console.log(e);
            throw new Error("xPlusY-error:"+e);
        }
    }

    async ask_and_compute_x_plus_y_fois_z(){
        try {
            //.... à compléter en Tp
             let res=  0;//temporairement
            //.... à compléter en Tp
            process.exit();
        }
        catch(err) {
            console.log(err);
            process.exit();
        }
    }
}

//petit test:
let interactiveComputer :InteractiveComputer = new InteractiveComputer();
interactiveComputer.ask_and_compute_x_plus_y_fois_z();