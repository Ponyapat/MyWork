import 'package:flutter/material.dart';
import 'package:flutter_database/models/Transaction.dart';
import 'package:flutter_database/providers/transaction_provider.dart';
import 'package:flutter_database/screens/form_screen.dart';
import 'package:provider/provider.dart';


void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
          providers:[
            ChangeNotifierProvider(create: (context){
              return TransactionProvider();
            }),
            
          ],
          child: MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          primarySwatch: Colors.lightBlue,
          visualDensity: VisualDensity.adaptivePlatformDensity
        ),
        home: MyHomePage(title: 'Bank App'),
      ),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(widget.title),
          actions: [
            IconButton(
                onPressed: () {
                  Navigator.push(context, MaterialPageRoute(builder: (context) {
                    return FormScreen();
                  }));
                },
                icon: Icon(Icons.add))
          ],
        ),
        body: Consumer(builder: (context, TransactionProvider provider, Widget child),)
      );
  }
}
