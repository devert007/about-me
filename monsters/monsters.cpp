#include <iostream>
#include <string>
using namespace std;
enum class monsters
{
  OGRE,
  GOBLIN,
  SKELET,
  ORC,
  TROLL
};
struct about_monster
{
  monsters type;
  string info;
  int health;
};
string get_type(about_monster monster)
{
  if (monster.type == monsters::OGRE)
    return "ogre";
  if (monster.type == monsters::GOBLIN)
    return "goblin";
}
void print(about_monster monster)
{
  cout << "this is about " << get_type(monster) << "that have name " << monster.info << " and health " << monster.health;
}
int main()
{
  about_monster goblin = {monsters::GOBLIN, "her", 170};
  about_monster ogre = {monsters::OGRE, "he", 240};
  print(goblin);
  print(ogre);
  return 0;
}