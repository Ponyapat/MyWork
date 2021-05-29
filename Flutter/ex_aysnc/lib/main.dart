void main () async {
  //login
 print(await loginUser());
 print("ทำงานอื่นต่อ");
}

 Future <String> loginUser  () async{
   //pulldata
    var user = await getUserFromDatabase();
    return "ชื่อผู้ใช้ " +user;
  }


  Future <String> getUserFromDatabase() {
    //ข้อมูลในอนาคต
    return Future.delayed(Duration(seconds: 10),() => "Guide");
  }