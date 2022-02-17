import React, { useState } from 'react'

const AddTask = () => {

    const inpFields = [
        {
            name: "title",
            label: "Title",
            placeholder: "Enter your task",
            value: "",
            type: "text",
        },
        {
            name: "lastname",
            label: "Description",
            placeholder: "Last Name",
            value: "",
            type: "text",
        },
        {
            name: "email",
            label: "Assign to",
            placeholder: "Email",
            value: "l.petersen@comandsons.com",
            type: "email",
        },
        {
            name: "phone",
            label: "Collaborators",
            placeholder: "Add collaborators",
            value: "",
            type: "text",
        },
        {
            name: "Start date",
            label: "Address",
            placeholder: "DD-MM-YYYY",
            value: "",
            type: "text",
        },
        {
            name: "city",
            label: "Deadline",
            placeholder: "DD-MM-YYYY",
            value: "",
            type: "text",
        },
    ];
    const [data, setData] = useState(inpFields);
    const heandalChange = (e, i) => {
        let newData = [...data];
        newData[i].value = e.target.value;
        setData(newData);
    };
    return (
        <>
            <div className="addnewcontact-modal">
                <div
                    className="modal fade"
                    id="addtask"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered modal-xl">
                        <div className="modal-content">
                            <div className="modal-header py-4">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Add task
                                </h5>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="row gy-3">
                                        {data.map((item, i) => {
                                            return (
                                                <div className="col-lg-6 col-sm-12" key={i}>
                                                    <label>{item.label}</label>
                                                    <div className="inp-field">
                                                        <input
                                                            name={item.name}
                                                            type={item.type}
                                                            value={item.value}
                                                            placeholder={item.placeholder}
                                                            onChange={(e) => heandalChange(e, i)}
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </form>
                                <div className='text-center  mt-5'>
                                    <button className='button-419BCD br-100 br-100 br-100 text-left font-color-FFFFFF py-2 px-4 font-weight-normal font-11 font-family-Inter'>Create task</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddTask