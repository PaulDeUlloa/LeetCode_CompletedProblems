// You are given an integer array nums with the following properties:
// nums.length == 2 * n.
// nums contains n + 1 unique elements.
// Exactly one element of nums is repeated n times.
// Return the element that is repeated n times.



class Solution {
    public int repeatedNTimes(int[] A) {
        Map<Integer, Integer> count = new HashMap();
        for (int x: A) {
            count.put(x, count.getOrDefault(x,0) + 1);
        }
        
        for (int k: count.keySet())
            if (count.get(k) > 1)
                return k;

        throw null;
    }
}