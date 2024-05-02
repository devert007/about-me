
#include <iostream>
#include <ctime>

using namespace std;

template<typename T>
class List {
public:
	List();
	~List();
	void push_back(T data);
	T& operator[](const int index);
	int Get_size() { return size; }
	void clear();
	void pop_front();
	void push_front(T data);
	void insert(T value, int index);
	void removeAt(int index);

private:
	template <typename T>
	class Node {
	public:
		T data;
		Node* pnext;
		Node(T data = T(), Node* pnext = nullptr) {
			this->data = data;
			this->pnext = pnext;
		}
	};

	Node<T>* head;
	int size;
};

template<typename T>
List<T>::List() {
	size = 0;
	head = nullptr;
}

template<typename T>
List<T>::~List() {
	clear();
}

template<typename T>
void List<T>::push_back(T data) {
	if (head == nullptr) {
		head = new Node<T>(data);
	}
	else {
		Node<T>* current = this->head;
		while (current->pnext != nullptr) {
			current = current->pnext;
		}
		current->pnext = new Node<T>(data);
	}
	size++;
}

template<typename T>
T& List<T>::operator[](const int index) {
	int count = 0;
	Node<T>* current = this->head;
	while (count != index) {
		current = current->pnext;
		count++;
	}
	return current->data;
}

template<typename T>
void List<T>::clear() {
	while (size) {
		pop_front();
	}
}

template<typename T>
void List<T>::pop_front() {
	Node<T>* temp = head;
	head = head->pnext;
	delete temp;
	size--;
}

template<typename T>
void List<T>::push_front(T data) {
	head = new Node<T>(data, head);
	size++;
}

template<typename T>
void List<T>::insert(T value, int index) {
	Node<T>* previous = this->head;
	for (int i = 0; i < index - 1; i++)
		previous = previous->pnext;
	Node<T>* newNode = new Node<T>(value);
	previous->pnext = newNode;
	size++;
}

template<typename T>
void List<T>::removeAt(int index) {
	if (index == 0) {
		pop_front();
	}
	else {
		Node<T>* previous = this->head;
		for (int i = 0; i < index - 1; i++)
			previous = previous->pnext;
		Node<T>* todelete = previous->pnext;
		previous->pnext = todelete->pnext;
		delete todelete;
		size--;
	}
}

int main() {
	List<int> ls;
	int n;
	cin >> n;
	for (int i = 0; i < n; i++)
		ls.push_back(rand() % 10);
	for (int i = 0; i < n; i++)
		cout << ls[i]<<' ';
	return 0;
}
