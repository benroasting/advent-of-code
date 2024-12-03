file_path = 'input.txt' 
# file_path = 'sample.txt'

def calculate_total_distance(file_path)
    left_list = []
    right_list = []

    # turn file into array / columns
    File.foreach(file_path) do |line|
      left, right = line.split.map(&:to_i)
      left_list << left
      right_list << right
    end

    # sort the columns
    left_list.sort!
    right_list.sort!
    
    puts "Left list: #{left_list}"
    puts "Right list: #{right_list}"

    # calculate the distance between column indexes
    total_distance = 0
    left_list.each_with_index do |left, index|
      right = right_list[index]
      total_distance += (right - left).abs
    end

    puts "Total distance: #{total_distance}"
    # sample should return 11
    # real input should return 1319616
    
end

calculate_total_distance(file_path)


