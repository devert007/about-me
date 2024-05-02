#include <iostream>
using namespace std;

class Myclass 
{
  public:
  int *data;
  Myclass(int size)
  { 
    this->data=new int[size];
    for(int i=0;i<size;i++)
   { data[i]=i;
     cout<<this<<" constructor"<<data[i]<<endl;
   }
  
  }
~Myclass()
{
  cout<<"destructure "<<this<<endl;
  delete[]data;
}

};
void Foo(Myclass value)
{
  cout<<"function Foo"<<endl;
}
Myclass Foo2()
{ 
  cout<<"function foo2"<<endl;
  Myclass temp(2);
   return temp;
}





int main()
{ Myclass a(10);
//Foo(a);
//Foo2();
  return 0;

}