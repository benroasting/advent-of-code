file_path = 'input.txt' 
# file_path = 'sample.txt'


# part one

def check_safety(report)
    # is an Enumerable method that iterates over the array in consecutive pairs of two elements.
    differences = report.each_cons(2).map { |a, b| b - a }
    all_increasing = differences.all? { |diff| diff >= 1 && diff <= 3 }
    all_decreasing = differences.all? { |diff| diff <= -1 && diff >= -3 }
    all_increasing || all_decreasing
end

# part two
def modified_safety(report)
  return true if check_safety(report)
  
  report.each_index do |i|
    modified_report = report[0...i] + report[(i + 1)..-1]
    return true if check_safety(modified_report)
  end

  false
end


# Read and process the input file
def main 
  file_path = 'input.txt' 

  reports = File.readlines(file_path).map do |line|
    line.split.map(&:to_i)
  end
  safe_count = reports.count { |report| check_safety(report) }
  puts "Safe reports: #{safe_count}"
  # sample eqauls 2
  # real input equals 287
  # 
  modified_safety_count = reports.count { |report| modified_safety(report) }
  puts "Modified safe reports: #{modified_safety_count}"

  # sample eqauls 4
  # real input equals 354
end


main


