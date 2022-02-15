const employee = {
    template: `
    <div>
    <button type="button" class="btn btn-primary m-1 fload-end"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal" 
    @click="addClick()">
    Add Employee</button>

   <table class="table table-hover">
 <thead>
   <tr>
     <th scope="col">Employee Id</th>
     <th scope="col">Employee Name</th>
     <th scope="col">Department</th>
     <th scope="col">Date of Joining</th>
     <th scope="col">Options</th>
   
   </tr>
 </thead>
 <tbody>
   <tr v-for = "emp in employees">

    <td>{{emp.EmployeeId}}</td>
    <td>{{emp.EmployeeName}}</td>
    <td>{{emp.Department}}</td>
    <td>{{emp.DateOfJoining}}</td>

    <td>
       <button type="button" class="btn btn-light m-1"
       data-bs-toggle="modal"
       data-bs-target="#exampleModal" 
       @click="editClick(emp)">

       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
 <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
 <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
       </button >
       <button type="button" class="btn btn-light m-1" @click="deleteEmployee(emp.EmployeeId)">
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
       <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
       </svg>
       </button>
    </td>
   </tr>
   <tr>
 </tbody>
</table>

<!-- Button trigger modal -->


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
 <div class="modal-dialog modal-lg">
   <div class="modal-content">
     <div class="modal-header">
       <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
     </div>
     <div class="modal-body">
    <div class="d-flex flex-row bt-highlight mb-3" >
       <div class="p-2 w-50 bd-highlight">
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Employee Name</span>
                <input type="text" class="form-control"  aria-label="Username" 
                aria-describedby="basic-addon1" v-model="EmployeeName">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Department</span>
                <select type="text" class="form-select"  v-model="Department">
                 <option v-for="department in departments">
                 {{department.DepartmentName}}
                 </option>
                </select>
            </div>
            
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Date of Joining</span>
                <input type="date" class="form-control"  aria-label="Username" 
                aria-describedby="basic-addon1" v-model="DateOfJoining">
            </div>

        </div>

        <div class="p-2 w-50 bd-highlight">
             <img width="250px" height="250px" :src="PhotoPath+PhotoFileName"/>
             <input class="m-2" type="file" @change="imageUpload"  
              accept=".jpg,.jpeg,.png,.gif, image/jpeg,image/png,image/gif">
        </div>
    </div>

     
        <button type="button" @click="createEmployee()"
         v-if="EmployeeId==0" 
         class="btn btn-primary"> 
         Create
        </button>  
       <button type="button" @click="updateEmployee()"
       v-if="EmployeeId!=0" 
       class="btn btn-primary">
        update 
        </button>
      
     </div>
    
   </div>
 </div>
</div>
    </div>
    `,

    data(){
        return {
               departments: [],
               employees: [],
               modalTitle: "",
               EmployeeName: "",
               EmployeeId:0,
               Department:"",
               DateOfJoining:"",
               PhotoFileName:"anonymous.png",
               PhotoPath:variables.PHOTO_URL
              
            }
        },
        methods: {

            refreshData(){
                axios.get(variables.API_URL+"employee")
                .then((response)=>{
                    this.employees = response.data
                    console.log(response.data)
                })
                
                axios.get(variables.API_URL+"department")
                .then((response)=>{
                    this.departments = response.data
                    console.log(response.data)
                })
            },
            addClick(){
              this.modalTitle = "Add Employee",
              this.EmployeeId = 0,
              this.EmployeeName = "",
              this.Department = "",
              this.DateOfJoining = "",
              this.PhotoFileName = "anonymous.png"
            },
            editClick(employee){
              this.modalTitle = "Edit Employee",
              this.EmployeeId = employee.EmployeeId,
              this.EmployeeName =employee.EmployeeName,
              this.Department = employee.Department,
              this.DateOfJoining = employee.DateOfJoining,
              this.PhotoFileName = employee.PhotoFileName
            },
            createEmployee(){
              axios.post(variables.API_URL+"employee",{
                  EmployeeName: this.EmployeeName,
                  Department: this.Department,
                  DateOfJoining: this.DateOfJoining,
                  PhotoFileName: this.PhotoFileName
              })
              .then((response)=>{
                this.refreshData()
                alert(response.data)
              })
            },
            updateEmployee(){
              axios.put(variables.API_URL+"employee",{
                  EmployeeId : this.EmployeeId,
                  EmployeeName: this.EmployeeName,
                  Department: this.Department,
                  DateOfJoining: this.DateOfJoining,
                  PhotoFileName: this.PhotoFileName
            })
            .then((response)=>{
              this.refreshData()
              alert(response.data)
            })
            },
            deleteEmployee(employeeId){
                  /*if(!comfirm("are you sure?")){
                    return;
                  }*/
                    axios.delete(variables.API_URL+"employee/"+employeeId)
                   .then((response)=>{
                    this.refreshData();
                    alert(response.data)
                    })
                  
            },
            imageUpload(event){

                let formData = new FormData()
                formData.append('file',event.target.files[0]);
                axios.post(variables.API_URL+"employee/savefile",
                formData)
                .then((response)=>{
                  this.PhotoFileName = response.data
                })

            }
        },
        mounted: function(){
            this.refreshData()
        }
}