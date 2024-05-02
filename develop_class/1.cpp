#include <iostream>
#include <math.h>
using namespace std;

class complex_numbers
{
int c_re;
int  c_im;

public:

int get_cre(){return c_re; }
int get_cim(){return c_im; }
int set_cre(int re){c_re=re; }
int set_cim(int im){c_im=im; }

};

int main()
{
complex_numbers n;
n.set_cre(3);
n.set_cim(4);


  return 0;
}