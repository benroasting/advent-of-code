file_path = 'input.txt' 
# file_path = 'sample.txt'

def calculate_similar_numbers(file_path)
    left_list = []
    right_list = []

    # turn file into array / columns
    File.foreach(file_path) do |line|
      left, right = line.split.map(&:to_i)
      left_list << left
      right_list << right
    end

     # Create a hash to count occurrences of each number in the right column
    right_list_counts = Hash.new(0)
    right_list.each { |num| right_list_counts[num] += 1 }

    # calculate similarity score
    similarity_score = 0
    left_list.each do |left|
      similarity_score += left * right_list_counts[left]
    end

    puts "Total Similarity Score: #{similarity_score}"
    # sample should return 31
    # real input should return 27267728
    
end

calculate_similar_numbers(file_path)


