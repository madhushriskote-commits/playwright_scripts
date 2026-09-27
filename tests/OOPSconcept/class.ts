 
export class Employee{
empid :number
empName:string
empAge:number
private empsalary :number
static compnayname="Qedge"

constructor(id:number,Name:string,age:number,salary:number)
    {
        this.empid=id
        this.empName=Name
        this.empAge=age
        this.empsalary=salary

    }
empinfo()
{
    console.log(`Emplyee ID ${this.empid} Name ${this.empName} Age ${this.empAge} Salary ${this.empsalary}`)
}

static displaycompanyname()
{
    console.log("company name is static :=>",Employee.compnayname)
}
}
const emp = new Employee(20,'madhu',30,5000)
emp.empinfo()
Employee.displaycompanyname()


