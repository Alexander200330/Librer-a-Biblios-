export default class UserModel {
	constructor(
		pId = "",
		pUsername = "",
		pEmail = "",
		pConfirmed = null,
		pBlocked = null,
		pPassword = ""
	) {
		this.setData({
			id: pId,
			username: pUsername,
			password: pPassword,
			email: pEmail,
			confirmed: pConfirmed,
			blocked: pBlocked,
		});
	}

	setData(data) {
		this.id = data.id;
		this.username = data.username;
		this.password = data.password;
		this.email = data.email;
		this.confirmed = data.confirmed;
		this.blocked = data.blocked;
		return this;
	}

	getJSON() {
		return {
			id: this.id,
			username: this.username,
			password: this.password,
			email: this.email,
			confirmed: this.confirmed,
			blocked: this.blocked,
		};
	}

	getJSONToDB() {
		return {
			identifier: this.username,
			password: this.password,
		};
	}
}
