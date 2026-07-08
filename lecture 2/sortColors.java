import java.util.Arrays;
public class sortColors {
    public static void main(String[] args) {

        int[] nums = {2, 0, 2, 1, 1, 0};

        Arrays.sort(nums);

        System.out.println("Sorted Array:");
        for (int n : nums) {
            System.out.print(n + " ");
        }
    }
}