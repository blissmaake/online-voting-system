require "application_system_test_case"

class NotificationTablesTest < ApplicationSystemTestCase
  setup do
    @notification_table = notification_tables(:one)
  end

  test "visiting the index" do
    visit notification_tables_url
    assert_selector "h1", text: "Notification tables"
  end

  test "should create notification table" do
    visit notification_tables_url
    click_on "New notification table"

    fill_in "Event", with: @notification_table.event
    fill_in "Message", with: @notification_table.message
    click_on "Create Notification table"

    assert_text "Notification table was successfully created"
    click_on "Back"
  end

  test "should update Notification table" do
    visit notification_table_url(@notification_table)
    click_on "Edit this notification table", match: :first

    fill_in "Event", with: @notification_table.event
    fill_in "Message", with: @notification_table.message
    click_on "Update Notification table"

    assert_text "Notification table was successfully updated"
    click_on "Back"
  end

  test "should destroy Notification table" do
    visit notification_table_url(@notification_table)
    click_on "Destroy this notification table", match: :first

    assert_text "Notification table was successfully destroyed"
  end
end
