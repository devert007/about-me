#include <iostream>
using namespace std;

int main()
{int  height,width;
  cout<<"vvedite vysoty "<<'\n';
cin>>height;
 cout<<"vvedite dliny "<<'\n';
cin>>width;
int space=width-2;
  for (int h = 0; h < height; h++)
  {
   cout << endl;
   
   if (h == 0 || h == height - 1)
   {
    for (int w = 0; w < width; w++)
    {
     cout << "#";
    }
   }
   else
   {
    cout << "#";
    for (int s = 0; s < space; s++)
    {
     cout << " ";
    }
    cout << "#";
   }
  }
 }