import 'package:flutter/material.dart';
import 'FoodMenu.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "My App",
      home: MyHomePage(),
      theme: ThemeData(primaryColor: Colors.redAccent.shade100),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  List<FoodMenu> menu = [
    FoodMenu("ข้าว", "20","assets/images/ข้าว.jpg"),
    FoodMenu("กระเพรา", "40","assets/images/กะเพรา.jpg"),
    FoodMenu("ส้มตำ", "60","assets/images/ส้มตำ.jpg")
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Select Menu"),
        ),
        body: ListView.builder(
            itemCount: menu.length,
            itemBuilder: (BuildContext context, int index) {
              FoodMenu food = menu[index];

              return ListTile(
                leading: Image.asset(food.img),
                title: Text(food.name , style: TextStyle(fontSize: 25),),
                subtitle: Text("ราคา"+food.price+"บาท"),
                onTap: (){
                  print("คุณเลือก" +food.name);
                }
                
              );
            }));
  }
}

