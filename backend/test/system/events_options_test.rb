require "application_system_test_case"

class EventsOptionsTest < ApplicationSystemTestCase
  setup do
    @events_option = events_options(:one)
  end

  test "visiting the index" do
    visit events_options_url
    assert_selector "h1", text: "Events options"
  end

  test "should create events option" do
    visit events_options_url
    click_on "New events option"

    fill_in "Eventname", with: @events_option.eventName
    fill_in "Options", with: @events_option.options
    fill_in "Voting event", with: @events_option.voting_event_id
    click_on "Create Events option"

    assert_text "Events option was successfully created"
    click_on "Back"
  end

  test "should update Events option" do
    visit events_option_url(@events_option)
    click_on "Edit this events option", match: :first

    fill_in "Eventname", with: @events_option.eventName
    fill_in "Options", with: @events_option.options
    fill_in "Voting event", with: @events_option.voting_event_id
    click_on "Update Events option"

    assert_text "Events option was successfully updated"
    click_on "Back"
  end

  test "should destroy Events option" do
    visit events_option_url(@events_option)
    click_on "Destroy this events option", match: :first

    assert_text "Events option was successfully destroyed"
  end
end
