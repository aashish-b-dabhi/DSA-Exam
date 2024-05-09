
class stack {
    constructor() {
        this.arr = []
        this.reversearray = []
        this.size = 5
    }

    addElement(element) {
        if (this.arr.length < 5) {
            this.arr.push(element)
        }
        else{
            console.log("overflow");
        }
    }

    print(){
        this.arr.map((val,ind)=>{
            console.log(val);
        })
    }

    reverse(){

        console.log("reverse array");
        for (let i = 0; i < this.arr.length; i++) {
          this.reversearray[i] = this.arr[this.arr.length - 1 -i]            
        }

        this.arr.length = this.arr.length - 1

        console.log(this.reversearray);
    }

    lastElement(){
        console.log("Last Element",this.arr[0]);
    }

    lastSecondElement(){
        console.log("last Second Element",this.arr[1]);
    }

    firstElement(){
        console.log("First Element",this.arr[this.arr.length -1]);
    }
}

let s1 = new stack()
s1.addElement(14)
s1.addElement(31)
s1.addElement(28)
s1.addElement(65)
s1.addElement(78)

s1.print()

s1.lastElement()
s1.lastSecondElement()
s1.firstElement()

s1.reverse()
