#include <iostream>
#include <time.h>
using namespace std;
int get_random_number()
{
  srand(time(0));
  int rand_number = rand() % 5 + 1;
  return rand_number;
}
void sravnenie(int rand, int num)
{
  if (rand > num)
  {
    cout << "the number less than my number" << '\n';
  }
  if (rand < num)
  {
    cout << "the number more than my number" << '\n';
  }
}
int main()
{
  cout << "lets go,i'm thinking a number fromm 1 to 100,you need to guess with 7 tries" << '\n';
  const int rand_number = get_random_number();
  const int tries = 7;
  int degree = 0;
  while (tries != degree)
  {
    int number = 0;
    int x = 0;
    cout << "guess # " << x << ": ";
    cin >> number;

    if (number != rand_number)
    {
      sravnenie(rand_number, number);
      degree++;
      x++;
      continue;
    }
    else
      cout << "you win";
    break;
  }

  return 0;
}