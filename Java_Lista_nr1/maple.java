/**
 * @(#)maple.java
 *
 * excercise D2 from list no. 1
 * @author: Marcel Sawicki
 * @version 1.00 2013/11/12
 */

public class maple{
	        
public static void main(String[] args) {
 
double a=Czytanie.czytajDouble("a=");
double b=Czytanie.czytajDouble("b=");
double c=Czytanie.czytajDouble("c=");

System.out.println("Podano: "+a+", "+b+", "+c);

System.out.println("Podane liczby wydrukowane rosnaco:");

if( (a<=b) && (a<=c) ){System.out.println(a); 
						if(b<=c){System.out.println(b); System.out.println(c);}
							else{ if(c<=b){System.out.println(c); System.out.println(b);}};
						};  

if( (b<=a) && (b<=c) ){System.out.println(b); 
						if(a<=c){System.out.println(a); System.out.println(c);}
							else{ if(c<=a){System.out.println(c); System.out.println(a);}};
						};  

if( (c<=b) && (c<=a) ){System.out.println(c); 
						if(b<=a){System.out.println(b); System.out.println(a);}
							else{ if(a<=b){System.out.println(a); System.out.println(b);}};
						};  


System.out.println("Wydruk podanych liczb, w podanej kolejnosci: "+a+", "+b+", "+c);

}//main

}//maple
