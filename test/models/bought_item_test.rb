# == Schema Information
#
# Table name: bought_items
#
#  id         :bigint(8)        not null, primary key
#  product_id :integer
#  quantity   :integer
#  cart_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class BoughtItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
