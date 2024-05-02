#include <iostream>
#include <array>
#include <cstdlib>
#include <ctime>

using namespace std;

int getRandomNumber(int min, int max)
{
  static const double fraction = 1.0 / (static_cast<double>(RAND_MAX) + 1.0);

  return static_cast<int>(rand() * fraction * (max - min + 1) + min);
}
enum class RANK
{
  RANK_2,
  RANK_3,
  RANK_4,
  RANK_5,
  RANK_6,
  RANK_7,
  RANK_8,
  RANK_9,
  RANK_10,
  RANK_VALET,
  RANK_DAMA,
  RANK_KOROL,
  RANK_TYZ,
  MAX_RANKS

};
enum class SUIT
{
  SUIT_TREFU,
  SUIT_BYBNU,
  SUIT_CHERVU,
  SUIT_PIKI,
  MAX_SUITS
};
struct Card
{
  RANK rank;
  SUIT suit;
};
void printCard(const Card &card)
{
  switch (card.rank)
  {
  case RANK::RANK_2:
    cout << "2" << '\n';
    break;
  case RANK::RANK_3:
    cout << "3";
    break;
  case RANK::RANK_4:
    std::cout << "4";
    break;
  case RANK::RANK_5:
    std::cout << "5";
    break;
  case RANK::RANK_6:
    std::cout << "6";
    break;
  case RANK::RANK_7:
    std::cout << "7";
    break;
  case RANK::RANK_8:
    std::cout << "8";
    break;
  case RANK::RANK_9:
    std::cout << "9";
    break;
  case RANK::RANK_10:
    std::cout << "T";
    break;
  case RANK::RANK_VALET:
    std::cout << "V";
    break;
  case RANK::RANK_DAMA:
    std::cout << "D";
    break;
  case RANK::RANK_KOROL:
    std::cout << "K";
    break;
  case RANK::RANK_TYZ:
    std::cout << "T";
    break;
  }
  switch (card.suit)
  {
  case SUIT::SUIT_TREFU:
    std::cout << "TR";
    break;
  case SUIT::SUIT_BYBNU:
    std::cout << "B";
    break;
  case SUIT::SUIT_CHERVU:
    std::cout << "CH";
    break;
  case SUIT::SUIT_PIKI:
    std::cout << "P";
    break;
  }
}
void print_deck(const array<Card, 52> &deck)
{
  for (const auto &card : deck)
  {
    printCard(card);
    cout << " ";
  }
  cout << '\n';
}
void swapCard(Card &x, Card &y)
{
  Card temp;
  temp = x;
  x = y;
  y = temp;
}
void shuffleDeck(array<Card, 52> &deck)
{
  for (int i = 0; i < 52; i++)
  {
    int swapIndex = getRandomNumber(0, 51);
    swapCard(deck[i], deck[swapIndex]);
  }
}

int main()
{
  srand(static_cast<unsigned int>(time(0)));
  rand();
  array<Card, 52> deck;
  int card = 0;

  for (int suit = 0; suit < 13; ++suit)
    for (int rank; rank < 4; ++rank)
    {
      deck[card].suit = static_cast<SUIT>(suit);
      deck[card].rank = static_cast<RANK>(rank);
      ++card;
    }

  print_deck(deck);
  shuffleDeck(deck);
  print_deck(deck);
  return 0;
}