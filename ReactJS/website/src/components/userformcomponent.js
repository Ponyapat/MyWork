import React , {Component} from 'react';

class UserformComponent extends Component {
    render() {
        return(
            <div>
                <form>
                    <div class="form-group">
                        <label for="txtFullName">Firstname - Surname : </label>
                        <input type="text" name="txtFullName" id="FullName"
                            class="form-control" placeholder="Firstname-Surname"
                            value={data.fullname}
                            onChange={e => setdata({ ...data, fullname: e.target.value })} />
                    </div>

                    <div class="form-group">
                        <label for="txtAddress">Address : </label>
                        <input type="text" name="txtAddress" id="txtAddress"
                            class="form-control" placeholder="Address"
                            value={data.address}
                            onChange={e => setdata({ ...data, address: e.target.value })} />
                    </div>

                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="checkbox" class="form-check-input"
                                name="CheckBox" id="CheckBox"
                                value="CheckBoxValue" />
                            Male
                        </label>
                    </div>

                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="checkbox" class="form-check-input"
                                name="CheckBox" id="CheckBox"
                                value="CheckBoxValue" />
                            Female
                        </label>
                    </div>
                    <br />

                    <div class="form-group">
                        <label for="txtDate">Date of Birth: </label>
                        <input type="date" class="form-control" name="txtDate" id="txtDate" />
                    </div>

                    <div class="form-group">
                        <label for="txt">Text : </label>
                        <input type="text" name="txt" id="txt"
                            class="form-control" placeholder="Text" />
                    </div>

                    <div class="form-group">
                        <label for="txtName">UserName : </label>
                        <input type="text" name="txtName" id="txtName"
                            class="form-control" placeholder="Username" />
                    </div>


                    <div class="form-group">
                        <label for="txtPassword">Password : </label>
                        <input type="password" name="txtPassword" id="txtPassword"
                            class="form-control" placeholder="Password" />
                    </div>

                    <div class="form-group">
                        <label for="txtTel">Telephone : </label>
                        <input type="tel" name="txtTel" id="txtTel"
                            class="form-control" placeholder="Telephone" />
                    </div>

                    <div class="form-group">
                        <label for="txtSearch">Search : </label>
                        <input type="search" name="txtSearch" id="txtSearch"
                            class="form-control" placeholder="Search" />

                        <div class="form-group">
                            <label for="txtEmail">Email : </label>
                            <input type="email" name="txtEmail" id="txtEmail"
                                class="form-control" placeholder="Email" />
                        </div>
                    </div>

                    <button type="submit" class="btn-primary">Submit</button>
                    <button type="submit" class="btn-danger">Cancel</button>

                </form>

                <p>
                    Name: {data.fullname}
                    <br />
                    Address: {data.address}
                </p>
            </div>
        );
    }
}

export default UserformComponent;