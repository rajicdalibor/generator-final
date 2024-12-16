import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:firebase_auth/firebase_auth.dart';

final authStateProvider =
    NotifierProvider<AuthStateNotifier, User?>(AuthStateNotifier.new);

class AuthStateNotifier extends Notifier<User?> {
  @override
  User? build() {
    return null;
  }

  bool get isLoggedIn => state != null;

  User? get loggedInUser => state;

  User? updateUser(User? newUser) {
    state = newUser;
    return newUser;
  }
}
