#include<iostream>
using namespace std;

class A{

public:
int speed;

void setspeed(){
    cout<<"speeed";
}



};

class B:public A{
    public:
    int setspeed(){
        speed=100;
        return speed;
    }
};




int main(){
    B obj;
    obj.setspeed();



    return 0;
}