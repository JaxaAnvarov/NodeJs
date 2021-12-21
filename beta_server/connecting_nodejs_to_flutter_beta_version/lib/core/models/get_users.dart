import 'package:connecting_nodejs_to_flutter_beta_version/core/models/get_users_from_api.dart';
import 'package:dio/dio.dart';

Future<List<Users>> _getUsersFromApi() async {
  var res = await Dio().get('https://http://localhost:1111/users');

  return (res.data as List).map((e) => Users.fromJson(e)).toList();
}

Future<List<Users>> get getUsers => _getUsersFromApi();