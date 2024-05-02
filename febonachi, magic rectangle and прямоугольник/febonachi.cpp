#include <iostream>
#include <iomanip>
using namespace std;


int febonachi(int n)
{
  if(n==0)
  return 0;
  if (n==1)
  return 1;
  return febonachi(n-1)+febonachi(n-2);

}

int main()
{
  cout<<"febonachi numbers :"<<'\n';
  for (int elements=0;elements<15;elements++)
     cout<<febonachi(elements)<<' ';
}