#include <iostream>
#include "constant.h"
#include <math.h>
using namespace std;

const int const_of_H(int height)
{
  return height;
}
void write_a_answer(const double height)
{
  double new_height{1};
  for (int x = 0; new_height > 0; x++)
  {

    cout << "at " << x << " seconds a ball have height :" << new_height << '\n';
    new_height = height - constant::gravity * pow(x, 2) / 2;
  }
}
int main()
{
  int height{0};
  cout << "enter a height" << '\n';
  cin >> height;
  const_of_H(height);
  write_a_answer(height);
  return 0;
}