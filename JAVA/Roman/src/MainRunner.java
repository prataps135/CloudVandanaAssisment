import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class MainRunner {
	public static void main(String[] args) {
		// Task 1: shuffle an array
        Integer[] array = {1, 2, 3, 4, 5, 6, 7};
        List<Integer> list = Arrays.asList(array);
        Collections.shuffle(list);
        System.out.println("Shuffled Array: " + list);

        // Task 2: convert Roman numeral to integer
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a Roman numeral: ");
        String romanNumeral = scanner.nextLine().toUpperCase();
        int romanToInteger = romanToInteger(romanNumeral);
        System.out.println("Integer equivalent: " + romanToInteger);

        // Task 3: check for a pangram
        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine().toLowerCase();
        boolean isPangram = isPangram(sentence);
        System.out.println("Is it a pangram? " + isPangram);
    }

    public static int romanToInteger(String s) {
        int result = 0;
        int prevValue = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            char c = s.charAt(i);
            int value;
            switch (c) {
                case 'I':
                    value = 1;
                    break;
                case 'V':
                    value = 5;
                    break;
                case 'X':
                    value = 10;
                    break;
                case 'L':
                    value = 50;
                    break;
                case 'C':
                    value = 100;
                    break;
                case 'D':
                    value = 500;
                    break;
                case 'M':
                    value = 1000;
                    break;
                default:
                    value = 0;
            }

            if (value < prevValue) {
                result -= value;
            } else {
                result += value;
            }
            prevValue = value;
        }
        return result;
    }

    public static boolean isPangram(String sentence) {
        boolean[] isAlphabetPresent = new boolean[26];
        int totalAlphabets = 0;

        for (int i = 0; i < sentence.length(); i++) {
            char c = sentence.charAt(i);
            if (Character.isLetter(c)) {
                int index = c - 'a';
                if (!isAlphabetPresent[index]) {
                    isAlphabetPresent[index] = true;
                    totalAlphabets++;
                }
            }
        }

        return totalAlphabets == 26;
	}
}
